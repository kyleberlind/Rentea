from pydantic import BaseModel
from typing import Optional
from .firestore_client import FirestoreClient


class LandlordDao:
    def __init__(self, client=None):
        self.client = client or FirestoreClient()

    def add_landlord_review_by_address(self, review_data):
        self.client.db.collection("addresses").add(review_data)
