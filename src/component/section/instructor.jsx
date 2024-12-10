import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../utils/utils";

const subTitle = "World-class Instructors";
const title = "Classes Taught By Real Creators";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await axios.get(
          API_BASE_URL + "/authors/get_top_authors"
        );
        setInstructor(response.data.data); // Set authors data from the response
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch authors");
        setLoading(false);
      }
    };

    fetchAuthors();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="instructor-section padding-tb section-bg">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            {instructor.map((val, i) => (
              <div className="col" key={i}>
                <div className="instructor-item">
                  <div className="instructor-inner">
                    <div className="instructor-thumb">
                      <img src={`${val.image_url}`} alt={`${val.name}`} />
                    </div>
                    <div className="instructor-content">
                      <Link to={`/team-single?authorId=${val.author_uid}`}>
                        <h4>{val.name}</h4>
                      </Link>
                      <p>{val.designation}</p>
                      <Rating review={val.review} />
                    </div>
                  </div>
                  <div className="instructor-footer">
                    <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                      <li>
                        <i className="icofont-book-alt"></i>{" "}
                        {val.courseCount + " Courses"}
                      </li>
                      <li>
                        <i className="icofont-users-alt-3"></i>{" "}
                        {val.studentAnroll + " Students"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center footer-btn">
            <p>
              Want to help people learn, grow and achieve more in life?
              <Link to="/team">Become an instructor</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
