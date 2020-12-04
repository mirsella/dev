def pig_it(text):
    text = text.split(' ')
    textb= ''
    for i in range(len(text)):
        textb += text[i][1:]+text[i][0]
        if text[i] != '!' and text[i] != '?':
            textb += 'ay'
        textb += ' '
    return textb.strip()
