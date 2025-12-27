import user1 from "../../../data/img/profile1.jpg";
import user2 from "../../../data/img/profile2.jpg";

const getProfileImage = (profile) => {
  // return profile === "user1" ? user1 : user2;
  return profile;
};

export function Comments({ commentsList, k }) {
  return (
    <>
      {commentsList.map((c) => (
        <div className="comment-card" key={c.id}>
          <p className="comment">"{c.comment}"</p>
          <div className="profile">
            <img
              src={getProfileImage(c.profile)}
              alt={c.username}
              className="profile-img"
            />
            <div className="info">
              <p className="username">{c.username}</p>
              <p className="username-link">{c.userlink}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
