import math
def make_readable(s):
  h = math.floor(s/3600)
  s = s%3600
  m = math.floor(s/60)
  s = s%60
  return f(h)+':'+f(m)+':'+f(s)

  def f(n):
    n = str(n)
    return '0'+n if len(n) == 1 else n
