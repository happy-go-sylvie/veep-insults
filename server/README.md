# VEEP Insults Server

This project uses Google Firebase:
* Google Firestore database for the storage of resources: VEEP characters and insults.
* Google Cloud function for the implementation of the ReSTful services.

## Firebase Setup

[Go to the Firebase Console](https://console.firebase.google.com/u/0/) and add a new project.

### Database Setup

Now, we're going to set up a database to store our list of characters and our list of insults.

Once your project is created, click "database" on the left menu.
Under "Cloud Firestore", click "Create database".

In this database, we create two collections *characters* and *insults*.

In the *characters* collection, a document has the first name of the character as its id and is composed of:
```
firstname: string
lastname: string
```
For example, the *character* document with the id "selina" contains:
```
firstname: "Selina"
lastname: "Meyer"
```

In the *insults* collection, a document has an auto-generated id and is composed of:
```
from: string
to: string
content: string
```
For example, the *insult* document with the id "jeRdUm21KyJ7KOX7zM1l" contains:
```
from: "selina"
to: "catherine"
content: "The only thing Catherine ever finished was an entire ice cream cake."
```

### Cloud Function Setup

Now, we're going to implement the ReSTful services that will allow us to access those resources.

[Install the Google Firebase CLI](https://firebase.google.com/docs/cli).

Then, go to your terminal, create a folder and in this folder, run `firebase init` and select `Functions` from the proposed menu.

