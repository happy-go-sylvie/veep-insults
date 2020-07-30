# veep-insults
A website to browse the best insults from the HBO show VEEP!

## Repository map
The repository is split in two parts:
* server: the back-end part which relies on the Google Cloud Firestore database to store the list of VEEP characters and insults, and a Google Cloud function that implements ReST APIs.
* [client](./client/README.md): the front-end part which relies on the ReST APIs served by the back-end to access the resources and display them.