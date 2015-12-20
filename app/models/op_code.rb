class OpCode < ActiveRecord::Base
  validates :php, presence: true
  before_create do
    self.md5 = Digest::MD5.new.update(php).hexdigest
  end
end