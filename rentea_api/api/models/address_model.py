from ..daos.address_dao import AddressDao
from typing import Optional
from pydantic import BaseModel


class AddressModel(BaseModel):
    formatted_address: Optional[str] = None


    def get_landlord_by_address(self, formatted_address):
        """Gets the review for the address"""
        dao = AddressDao()
        try:
            review = dao.get_landlord_by_address(formatted_address)
            return review
        except Exception as error:
            return []
