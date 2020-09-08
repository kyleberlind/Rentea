from base_model import Base_Model
from ..daos.review_dao import Review_Dao

class Review_Model(Base_Model):
    def __init__(self, dao, address=None, landlord=None):
        self.dao = dao if dao else Review_Dao()
        self.address = address
        self.landlord = landlord

    def add_review():
        return

    def update_review():
        return

    def get_review():
        return
