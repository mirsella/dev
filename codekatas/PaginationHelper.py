# TODO: complete this class
import math

class PaginationHelper:

# The constructor takes in an array of items and a integer indicating
# how many items fit within a single page
  def __init__(self, collection, items_per_page):
    self.collection = collection
    self.itempp = items_per_page


    p = lambda self: math.floor(self.item_count() / self.itempp)

# returns the number of items within the entire collection
    def item_count(self):
      return len(self.collection)


# returns the number of pages
      def page_count(self):
        return self.p() + 1 if self.item_count() % self.itempp else 0


# returns the number of items on the current page. page_index is zero based
# this method should return -1 for page_index values that are out of range
        def page_item_count(self,page_index):
          if page_index > self.page_count()-1 or page_index < 0: return -1
          return self.item_count() % self.itempp if page_index == self.page_count()-1 else self.itempp


# determines what page an item is on. Zero based indexes.
# this method should return -1 for item_index values that are out of range
          def page_index(self,item_index):
  if item_index > self.item_count()-1 or item_index < 0: return -1
  return math.floor(item_index / self.itempp)
