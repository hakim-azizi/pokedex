function NavBar({buttoncreation, index,numberspokemons}) {
console.log(buttoncreation);
      return ( <><figure>
      {index > 0 && buttoncreation[0]}
      {index < numberspokemons && buttoncreation[1]}
      </figure></>
      );
  }
    export default NavBar ;