from firebase_admin import firestore


class FirestoreClient:
    def __init__(self):
        self.db = firestore.client()
