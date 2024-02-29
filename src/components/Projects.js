import React from 'react'



export default function Projects() {
    return (
        <>
        <div className='container w-40' style={{marginTop:"100px"}}>
          <h1 className='text-center'>My Projects</h1>
        <div className=" row row-cols-1 row-cols-md-2 g-4 my-3">
  <div className="col">
    <div className="card  shadow p-3 mb-5 border-primary">
      <div className="card-body">
        <h5 className="card-title">Newsify</h5>
        <p className="card-text">"Newsify is a dynamic React application designed to keep users informed with the latest news headlines. Leveraging API integration, Newsify fetches real-time news data from trusted sources, presenting it in a user-friendly interface.</p>
        <a href="https://github.com/vishusaxena/Newsify.git"  target='_blank' className="btn btn-primary">Go to Github</a>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow p-3 mb-5 border-primary">
      <div className="card-body">
        <h5 className="card-title">TextonTrack</h5>
        <p className="card-text"> "TextonTrack" is a versatile React project designed to streamline text manipulation tasks with ease. Whether you're looking to convert text to uppercase or lowercase, count characters or words, this app has you covered. 
.</p>
<a href="https://github.com/vishusaxena/TextonTrack.git"  target='_blank' className="btn btn-primary">Go to Github</a>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow p-3 mb-5 border-primary">
      <div className="card-body">
        <h5 className="card-title">TextFileManager</h5>
        <p className="card-text">"TextFileManager" is a C++ project designed to facilitate CRUD (Create, Read, Update, Delete) operations on text files. With TextFileManager, users can seamlessly manage text files, including tasks such as adding, viewing, updating, and deleting text entries within the files. </p>
        <a href="https://github.com/vishusaxena/TextFIleManager.git"  target='_blank' className="btn btn-primary">Go to Github</a>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow p-3 mb-5 border-primary">
      <div className="card-body">
        <h5 className="card-title">QuizLab</h5>
        <p className="card-text">"QuizLab" is your go-to destination for interactive quizzes on a wide range of technical and non-technical subjects. Developed with HTML, CSS, and JavaScript, QuizLab offers a dynamic and engaging platform for users to test their knowledge for the better future ahead.</p>
        <a href="https://github.com/vishusaxena/QuizLab.git"  target='_blank' className="btn btn-primary">Go to Github</a>

      </div>
    </div>
  </div>
</div>
</div>
        </>

    );
}

