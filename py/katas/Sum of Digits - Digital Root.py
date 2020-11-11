def digital_root(n):
  i = 1
  temp = 1
  t = 0
  while n > 9:
  t = 0
  temp = str (n)
  for j in range(len(temp)):
    t += int(temp[j])
    n = t
    return t
