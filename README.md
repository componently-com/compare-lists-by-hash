# Compare lists by hash

This script allows to count how many entries are shared between two lists
without having to share the lists themselves by hashing the list entries
and comparing the hashes only. For each entry, spaces and line breaks around the
entry get trimmed away and the string is converted to lower cases, so strings
that only differ in casing will be identified as matches.
Empty lines are ignored.

## Installation
Run  `npm link` in this directory to install the scripts.

## Deinstallation
Run  `npm unlink` in this directory to uninstall the scripts.

## Share a list of hashes
Then create a text file where each line is an entry to the list and hash it via
```shell script
hash-file name-of-your-input-file.txt name-for-the-output-file.txt
```
Share the output file with the person that will do the counting.

## Count hash hits
If someone gave you a list of hashes to compare, first create your own list that
you want to compare the hashes with. If you have both files, let's call them
`hashes.txt` and `yourOwnList.txt`, then you can run
```shell script
count-hash-hits yourOwnList.txt hashes.txt
``` 
The script will give you the number of hits.

## Examples
The [hashes example file](./examples/hashes.txt) was created from the [example list](./examples/list.txt)
by running
```shell script
hash-file ./examples/list.txt ./examples/hashes.txt
```
in this directory. Running
```shell script
count-hash-hits ./examples/list.txt ./examples/hashes.txt
```
therefore will give you 2, the number of entries in the list,
as all list entries will match.
