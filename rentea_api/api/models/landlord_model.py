from typing import Optional
from pydantic import BaseModel
from ..daos.landlord_dao import LandlordDao


class LandlordModel(BaseModel):

    def add_landlord_review_by_address(self, review_data):
        dao = LandlordDao()
        try:
            return dao.add_landlord_review_by_address(review_data)
        except Exception as error:
            return False
