#!/bin/bash
versionlatest=$(hxnormalize -x https://dl.gitea.io/gitea | hxselect -i tr.file.current td.description | rg -o '[0-9]+\.[0-9]+\.[0-9]+')
versioninstalled=$(/hdd/gitea/gitea --version| rg -o 'version [0-9]+\.[0-9]+\.[0-9]+' | rg -o '[0-9]+\.[0-9]+\.[0-9]+')
if [[ $versionlatest > $versioninstalled ]]; then
  echo -e "/hdd/gitea/gitea need a update.\ninstalled : $versioninstalled\nlastest : $versionlatest\n"
  cd /hdd/gitea
  wget https://dl.gitea.io/gitea/$versionlatest/gitea-$versionlatest-linux-amd64
  sudo chmod +x gitea-$versionlatest-linux-amd64
  sudo cp gitea-$versionlatest-linux-amd64 gitea
  cd -
else
  echo -e "/hdd/gitea/gitea is already up to date.\ninstalled : $versioninstalled\nlastest : $versionlatest"
fi

