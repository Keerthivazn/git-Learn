function Herosection(){
    const person={
        name:"Madhan",age:27,job:"Android Developer"
    }
    let age=20;
    let text;
    if (age >18) {
        text ="You can drive four wheeler"
    }else{
        text ="You can not  drive four wheeler"
    }
    return (
        <>
        <img></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptates incidunt iusto libero officiis dolorem quas accusamus culpa voluptas mollitia expedita quis, corrupti suscipit accusantium! Iusto, ipsam sint maiores omnis fugit aut illo vero natus id reiciendis autem, tempore sunt nihil delectus pariatur minima, harum placeat vitae nulla officiis eaque molestias earum? Laboriosam sapiente magni vel fugiat totam provident sunt quos consequuntur veritatis deserunt, in consectetur, non quis aliquid aspernatur id porro! Quaerat labore possimus laudantium quasi, assumenda eos ducimus aliquam eveniet. Minima, veritatis modi porro vel alias repudiandae. Aliquid asperiores officiis accusantium impedit facilis ea id animi neque dignissimos.</p>
        <h3>{person.name} is working as a {person.job}</h3>
        <p >{text}</p>
        <p>{age ? "You can drive four wheeler" : "You can not  drive four wheeler" }</p>
        </>
    )
}

export default Herosection