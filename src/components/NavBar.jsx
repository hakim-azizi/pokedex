function NavBar({buttoncreation,index,numberspokemons}) {
return ( <>
  <div>
    {index > 0 && buttoncreation[0]}
    {index < numberspokemons && buttoncreation[1]}
  </div>
      </>
      );
  }
    export default NavBar ;