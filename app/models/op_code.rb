require 'docker'

class OpCode < ActiveRecord::Base
  validates :php, presence: true
  before_create do
    self.md5 = Digest::MD5.new.update(php).hexdigest
    self.op = compile_op(php)
  end

  private

  def compile_op(php)
    img = Docker::Image.create('fromImage' => 'originalbrownbear/vld:5.6')
    container = img.run('tail -f /dev/null')
    s = container.exec(
      ['/bin/bash', '-lc', 'cat  << "EOF" >> /tmp/code.php ' + "\n" + php + "\n" + 'EOF'+ "\n" + 'php -dvld.active=1 -dvld.execute=0 /tmp/code.php'], tty: true).first.join('')
    container.delete force: true

    s
  end
end