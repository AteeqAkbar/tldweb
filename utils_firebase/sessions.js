import firebase from "firebase/app";
import { fireStore } from "./config";
import { getSingleUser, updatePoint } from "./users";
// create Sesssion
export const createSession = (data, router, id) => {
  // Add a new document with a generated id.
  fireStore
    .collection("sessions")
    .add({
      image: data.Image,
      instructor: id,
      students: ["HID06ysBc8cYx2rtsxvOAtOJT9o1"],
      tags: data.Tags,
      title: data.Title,
      startTime: new firebase.firestore.Timestamp.fromDate(
        new Date(data.StartTime)
      ),
      endTime: new firebase.firestore.Timestamp.fromDate(
        new Date(data.EndTime)
      ),
      poins: data.Points,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      router.push("/");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

// students register session
export const registorSession = (sessionId, uid) => {
  var Ref = fireStore.collection("sessions").doc(sessionId);

  // if(userPoins>sessionPoins){
  if (true) {
    updatePoint();
    Ref.update({
      students: firebase.firestore.FieldValue.arrayUnion(uid),
    });
    console.log("update ho gya he");
  } else {
    return "Do not have enough points...";
  }
};
// get all sessions
export const getAllSessions = async () => {
  const allSessions = [];
  const session = await fireStore.collection("sessions").get();
  // console.log(session.docs);
  for (const doc of session.docs) {
    const user = await getSingleUser(doc.data().instructor);
    allSessions.push({
      id: doc.id,
      ...doc.data(),
      instructor: user,
    });
  }
  return allSessions;
};
// filter session by tags
export const filterSessionByTag = async (tag) => {
  console.log("filterSessionByTag");
  const allSessions = [];
  const session = await fireStore
    .collection("sessions")
    .where("tags", "array-contains", tag)
    .get();
  // console.log(session.docs);
  for (const doc of session.docs) {
    const user = await getSingleUser(doc.data().instructor);
    allSessions.push({
      id: doc.id,
      ...doc.data(),
      instructor: user,
    });
  }
  return allSessions;
};

//  get session by id
export const getSessionById = async (id) => {
  const allStudents = [];

  const doc = await fireStore.collection("sessions").doc(id).get();
  // console.log(doc);
  if (doc.exists) {
    // console.log("datasasas", doc.data());
    const instructor = await getSingleUser(doc.data().instructor);
    for (const element of doc.data().students) {
      const user = await getSingleUser(element);
      allStudents.push(user);
    }
    return { ...doc.data(), students: allStudents, instructor };
    // return doc.data();
  } else {
    // doc.data() will be undefined in this case
    // console.log("No such document!");
    return "No such document!";
  }
};
//  filter session by user intrest
export const getSessionByUserSkills = async (data) => {
  try {
    const allfilterSession = [];
    const doc = await fireStore
      .collection("sessions")
      .where("tags", "array-contains-any", data)
      .get();
    for (const element of doc.docs) {
      const user = await getSingleUser(element.data().instructor);
      allfilterSession.push({ ...element.data(), instructor: user });
    }
    console.log(allfilterSession);
    return allfilterSession;
  } catch (error) {
    console.log(error);
  }
};

//  get all session in which user register
export const getSessionInUserRegister = async (id) => {
  try {
    const allfilterSession = [];
    const doc = await fireStore
      .collection("sessions")
      .where("students", "array-contains", id)
      .get();
    console.log(doc);
    if (!doc.empty) {
      for (const element of doc.docs) {
        const user = await getSingleUser(element.data().instructor);
        allfilterSession.push({ ...element.data(), instructor: user });
      }
      console.log(allfilterSession);
      return allfilterSession;
    } else {
      return "You are not register any Sessions";
    }
  } catch (error) {
    console.log(error);
  }
};
