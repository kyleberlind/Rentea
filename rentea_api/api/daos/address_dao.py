from ..daos.firestore_client import FirestoreClient


class AddressDao:
    def __init__(self, client=None):
        self.client = client or FirestoreClient()

    def get_landlord_by_address(self, formatted_address):
        """Gets a review for a given address"""
        landlord_query = self.client.db.collection("addresses").where(u"formattedAddress", u"==", formatted_address)
        return [doc.to_dict()["landlordData"] for doc in landlord_query.stream() if "landlordData" in doc.to_dict()]

