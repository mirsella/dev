if !exists("g:os")
  if has("win64") || has("win32") || has("win16")
    let g:os = "Windows"
  else
    let g:os = substitute(system('uname'), '\n', '', '')
  endif
endif

if g:os == "Darwin" " need testing i don't have mac
  do shell script "defaults read ~/Library/Preferences/com.apple.HIToolbox.plist AppleSelectedInputSources | egrep -w 'KeyboardLayout Name' | sed -E 's/^.+ = \"?([^\"]+)\"?;$/\\1/'"
elseif g:os == "Linux"
  let g:vem_layout = system('setxkbmap -query 2> /dev/null | grep -o -E "(querty|quertz|azerty)$" || echo "querty"')[:-2]
elseif g:os == "Windows"
  echo g:os
endif
