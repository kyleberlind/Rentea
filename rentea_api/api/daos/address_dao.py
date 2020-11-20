from ..daos.firestore_client import FirestoreClient


class AddressDao:
    def __init__(self):
        self.client = FirestoreClient()

    def get_landlord_by_address(self, address):
        """Gets a review for a given address"""
        landlord_query = self.client.db.collection("addresses")\
            .where(u"primary", u"==", str(address["primary"]).decode('utf8')) \
            .where(u"secondary", u"==", str(address["secondary"]).decode('utf8'))\
            .where(u"state", u"==", str(address["state"]).decode('utf8'))\
            .where(u"city", u"==", str(address["city"]).decode('utf8'))\
            .where(u"zip", u"==", str(address["zip"]).decode('utf8'))
        return [doc.to_dict()["landlord"] for doc in landlord_query.stream() if "landlord" in doc.to_dict()]

    def add_address(self, address):
        """Adds a review for a given address"""
        self.client.db.collection("addresses").add(address)

    def update_address(self, address):
        """Updates a review for a given address"""
        None
