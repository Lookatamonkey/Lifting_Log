# == Schema Information
#
# Table name: logs
#
#  id         :integer          not null, primary key
#  weight     :integer          not null
#  carb       :integer          not null
#  fat        :integer          not null
#  protein    :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Log < ApplicationRecord
    validates :weight, :carb, :fat, :protein, :author_id, presence: true
  
    belongs_to(
    :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
    )

end