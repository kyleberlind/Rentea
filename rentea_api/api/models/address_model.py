from ..daos.address_dao import AddressDao
from ..models.landlord_model import LandlordModel


class AddressModel:
    def __init__(self, address_data):
        self.dao = AddressDao()
        self.primary = address_data["primary"]
        self.secondary = address_data["secondary"]
        self.city = address_data["city"]
        self.state = address_data["state"]
        self.zip = address_data["zip"]
        self.landlord = LandlordModel(address_data["landlord"]) if "landlord" in address_data else None

    def add_address(self):
        """Adds a review for the address"""
        try:
            return self.dao.add_address(self.serialize())
        except Exception as error:
            return False

    def update_address(self):
        """Updates a review for the address"""
        return

    def get_landlord_by_address(self):
        """Gets the review for the address"""
        try:
            review = self.dao.get_landlord_by_address(self.serialize())
            return review
        except Exception as error:
            return []

    def serialize(self):
        return {
            "primary": self.primary,
            "secondary": self.secondary if self.secondary else None,
            "city": self.city,
            "state": self.state,
            "zip": self.zip,
            "landlord": self.landlord.serialize() if self.landlord else None
        }

