class Card < ApplicationRecord
  
  acts_as_list scope: :lists

  belongs_to :list

  validates :name, presence: true
  
end