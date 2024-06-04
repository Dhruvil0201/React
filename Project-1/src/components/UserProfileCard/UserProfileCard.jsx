
const ProfileCard = (props) => {
    return (
        <section className="w-100 vh-100 pr-bg d-flex flex-wrap align-items-center justify-content-center">
            <div className="card p-4 w-50 shadow-lg border-0 rounded-3">
                <div className="card-header d-flex flex-wrap align-items-center p-3 bg-gradient">
                    <img src={props.profile} alt="profile-img" className="rounded-circle me-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                    <div>
                        <h2 className="ps-3 m-0">{props.name} {props.lname}</h2>
                        <h4 className="ps-3 text-muted">{props.course}</h4>
                    </div>
                </div>
                <div className="card-body">
                    <h3>&#9775; DOB: <span>{props.dob}</span></h3>
                    <h3>&#9775; Gender: <span>{props.gender}</span></h3>
                    <h3>&#9775; Email: <span>{props.email}</span></h3>
                    <h3>&#9775; Contact: <span>{props.contact}</span></h3>
                    <h3>&#9775; Address: <span>{props.address}</span></h3>
                </div>
            </div>
        </section>
    );
};

export default ProfileCard;
