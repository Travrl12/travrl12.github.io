```ruby
require 'minitest/autorun'

class TestHelloWorld < Minitest::Test
  def test_hello_world
    assert_equal "Hello, World!", hello_world
  end

  def hello_world
    "Hello, World!"
  end
end
```
