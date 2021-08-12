import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import dateFormat from 'dateformat';
import Button from '@material-ui/core/Button';

const ThisBook = ({id}) => {
    const [book, setBook] = useState(null);
    const [name, setname] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [iComment, setIComment] = useState('');
    const [iCommentErr, setICommentErr] = useState('');
    const [bookComments, setBookComments] = useState([]);


    useEffect(
        () => {
                axios.get("http://localhost:8000/api/books/" + id)
                .then(res => {
                    setBook(res.data.Book);
                    setBookComments(res.data.Book.comments);
                    console.log(res.data.Book.title)
            })
        }, []
    );

    const validateName = (value) => {
        setname(value);
        if(value.length < 1){
            setNameErr("This field can't be empty !!");
        }
        else if(!isNaN(value)){
            setNameErr("this field can't contain a numbers");
        }
        else if(value.length < 3){
            setNameErr("Title shold not be less than 3 characters");
        }
        else {
            setNameErr("");
        }
    }

    const validateComment = (value) => {
        setIComment(value);
        if(value.length < 1){
            setICommentErr("This field can't be empty !!");
        }
        else if(!isNaN(value)){
            setICommentErr("this field can't contain a numbers");
        }
        else if(value.length < 3){
            setICommentErr("Comment shold not be less than 3 characters");
        }
        else {
            setICommentErr("");
        }
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        if(nameErr.length <=1 && iCommentErr.length <= 1 && name.length >0 && iComment.lenght >0){
            axios.post('http://localhost:8000/api/books/addcomment/' + id, {
            name, body: iComment, date: new Date()
            })
            .then(res=>{
                console.log(res);
                setname("");
                setIComment("");
                setBookComments(res.data.Book.comments);
            })
            .catch( (err) => {
                console.log(err.response);
            })
        }
    }

    return (
        <div class="col-md-9 col-sm-9 col-xs-12" id="thisBookk">
			{
                book === null ?
                <Spinner animation="border" role="status" variant="success">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                :
                <>
                <section class="breadcrumb-section">
            <div class="container">
                <div class="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/" >Home</Link></li>
                            <li class="breadcrumb-item active">Book Details</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
        <section class="inner-page-sec-padding-bottom">
            <div class="container">
                <div class="blog-post post-details mb--50">
                    <div class="blog-image">
                        <img src={book.imges} alt={book.title} />
                    </div>
                    <div class="blog-content mt--30">
                        <header>
                            <h3 class="blog-title">{book.title}</h3>
                            <div class="post-meta">
                                <span class="post-author">
                                    <i class="fas fa-user"></i>
                                    <span class="text-gray">Posted by : </span>
                                    {book.author}
                                </span>
                                <span class="post-separator">|</span>
                                <span class="post-date">
                                    <i class="far fa-calendar-alt"></i>
                                    <span class="text-gray">On : </span>
                                    {dateFormat(book.createdAt, "mmmm dS, yyyy")}
                                </span>
                            </div>
                        </header>
                        <article>
                            <blockquote>
                            <h3>Book Descroption</h3>
                                <p>{book.desc}</p>
                            </blockquote>
                        </article>
                    </div>
                </div>
                <div class="comment-block-wrapper mb--50">
                    <h3>{book.comments ? book.comments.length : 0} Comments</h3>
                    {
                        bookComments ? bookComments.map(
                            (comment, i) => {
                                return(
                                    <div class="single-comment">
                                        <div class="comment-avatar">
                                            <img src="image/icon/author-logo.png" alt="" />
                                        </div>
                                        <div class="comment-text">
                                            <h5 class="author"> <a href="#"> {comment.name} </a></h5>
                                            <span class="time">{dateFormat(comment.date, "mmmm dS, yyyy")}</span>
                                            <p>{comment.body}</p>
                                        </div>
                                    </div>
                                )
                            }
                        )
                        :
                        <p style={{color: 'green'}} >Be The First One Commenting On This Book ...</p>
                    }
                </div>
                <div class="replay-form-wrapper">
                    <h3 class="mt-0">LEAVE A COMMENT</h3>
                    <form action="./" class="blog-form">
                        <div class="row">
                        <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="name">Your Name *</label>
                                    <input onChange={(e)=>validateName(e.target.value)} value={name} type="text" id="name" class="form-control" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="message">Comment</label>
                                    <textarea onChange={(e)=>validateComment(e.target.value)} value={iComment} name="message" id="message" cols="30" rows="4"
                                        class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="submit-btn">
                                <Button onClick={onSubmitHandler} variant="contained" className="btn btn-black" color="primary">
                                Post Comment
                                </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
            }
		</div>
    )
}

export default ThisBook
