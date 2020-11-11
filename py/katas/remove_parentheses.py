def remove_parentheses(str):
  s = str
  count = 0
  countNextIteration = False
  toRemove = ""
  for i, l in enumerate(s):
    if countNextIteration:
    countNextIteration = False
    count -= 1
    if l == "(":
    count += 1
    elif l == ")":
    countNextIteration = True
    if count > 0:
    toRemove += str[i]
    else:
  s = s.replace(toRemove, "")
    print(toRemove.strip())
    toRemove = ""
    s = s.replace(toRemove, "")
    while ")" in s:
    s = remove_parentheses(s)
    return s
