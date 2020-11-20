import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


class FirestoreClient:
    def __init__(self):
        if not firebase_admin._apps:
            cred = credentials.Certificate('firestore_api_key.json')
            firebase_admin.initialize_app(cred)
        self.db = firestore.client()
