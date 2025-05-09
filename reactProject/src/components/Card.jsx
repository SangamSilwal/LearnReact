import "./card.css"
const Card = (props) => {
    
    return (
        <div class="profile-card">
       <img src="https://via.placeholder.com/120" alt="Profile Photo" class="profile-photo" />
      <div class="profile-info">
    <h2 class="name">{props.name}</h2>
    <p class="email">{props.email}</p>
    <p class="age">Age: {props.age}</p>
  </div>
</div>
    )
}
export default Card