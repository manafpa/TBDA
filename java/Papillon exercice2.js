function strtok(str1, str2,n)
{
    str1="robert ;dupont ;amiens ;80000"
    m=str1.split(str2)
    return m[n-1]


}
str1=strtok()
console.log(strtok(str1,";",3))