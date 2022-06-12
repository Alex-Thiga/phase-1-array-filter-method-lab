// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function findMatching ( driversArray, name )
{
    const resultFindMatching = driversArray.filter( item => item.toUpperCase() === name.toUpperCase())
}
function fuzzyMatch ( driversArray, name )
{
    const resultFuzzyMatch = driversArray.filter( item => item.toUpperCase().indexOf( name.toUpperCase() ) === 0 );
    return resultFuzzyMatch;
}
function matchName ( driversArray, string )
{
    const resultMatchName = driversArray.filter((item) => item.name === string);
    return resultMatchName;
}