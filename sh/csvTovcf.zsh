linen=0
while read -r line; do
((linen++))
name="$(echo $line | head -n 1 | cut -d',' -f'-3')"
mail="$(echo $line | head -n 1 | cut -d',' -f'6-14')"
num="$(echo $line | head -n 1 | cut -d',' -f'15-20')"
num1=$(echo $num | rg -o '^([\+|\(]?[0-9]{1,4}\)?)([-| ]?[0-9]*)*,')
if [[ -n $num1 ]];then num2=$(echo $num | sed "s/$num1//"); else unset num2; fi
echo """

BEGIN:VCARD
VERSION:3.0
FN:$name
EMAIL:$mail
TEL:$num1
TEL:$num2
END:VCARD

"""
done < yahoo.csv
