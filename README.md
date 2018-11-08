# opinion-poll-installer
simple installer for opinion-poll-SPA

## How to install
```shell
ssh www2.inf.h-brs.de
chmod a+x $HOME
mkdir logs
chgrp www-data logs
chmod 775 logs
cd public_html
git clone http://github.com/mkaul/opinion-poll-installer.git . 
```

## How to call your survey tool
Direct your browser to [http://www2.inf.h-brs.de/~astudi2s/index.html](http://www2.inf.h-brs.de/YOUR-USERNAME-HERE/index.html)
