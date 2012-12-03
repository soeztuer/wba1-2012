
if [ "$?" == "1" ]
then
	echo Usage $0 test_user
	exit -1
fi

echo Fake git repo for user $1

if [ ! -d ~/wba1-2012-test ]
then
	echo CLONE ORIGINAL wba1-2012 to ~/wba1-2012-test
	git clone --bare https://github.com/fh-koeln/wba1-2012 ~/wba1-2012-test

	# Ensure we do not push this later!
	cd ~/wba1-2012-test
	git remote remove origin
fi

if [ ! -d ~/wba1-2012-test-$1/wba1-2012 ]
then
	echo CLONE ~/wba1-2012-test to ~/wba1-2012-test-$1/wba1-2012
	git clone ~/wba1-2012-test ~/wba1-2012-test-$1/wba1-2012
fi

cd ~/wba1-2012-test-$1/wba1-2012

export "PS1=\\W $1\\$ "
bash
