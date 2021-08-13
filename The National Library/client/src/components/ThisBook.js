import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'
import dateFormat from 'dateformat';
import Button from '@material-ui/core/Button';
// import { Socket } from 'socket.io';
import io, { Socket } from "socket.io-client";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const ThisBook = ({id}) => {
    const [book, setBook] = useState(null);
    const [name, setname] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [iComment, setIComment] = useState('');
    const [iCommentErr, setICommentErr] = useState('');
    const [bookComments, setBookComments] = useState([]);
    const [socket] = useState(() => io(':8000'));
    const [comNum, setComNum] = useState(0);


    useEffect(
        () => {
                axios.get("http://localhost:8000/api/books/" + id)
                .then(res => {
                    setBook(res.data.Book);
                    setBookComments(res.data.Book.comments);
                    setComNum(res.data.Book.comments.length);
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
        if(nameErr.length <=1 && iCommentErr.length <= 1 && iComment.length > 0 && name.length > 0){
            axios.put('http://localhost:8000/api/books/addcomment/' + id, {
            name, body: iComment, date: new Date()
            })
            .then(res=>{
                socket.emit('newMessage', {name, body: iComment, date: new Date()});
                setBookComments([...bookComments, {name, body: iComment, date: new Date()}]);
                setComNum(comNum + 1);
                console.log(res);
                setname("");
                setIComment("");
            })
            .catch( (err) => {
                console.log(err.response);
            })
        }
        else {
            if(iComment.length <= 1) {
                setICommentErr("Empty Comment !!");
            }
            if(name.length <= 1){
                setNameErr("Name is Required !!");
            }
        }
    }

    useEffect(() => {
        socket.on('sendMessageToClient', message => setBookComments(messages => { return [ ...messages, message ]; }));
    }, []);

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
                    <h3>{book.comments ? comNum : 0} Comments</h3>
                    {
                        bookComments ? bookComments.map(
                            (comment, i) => {
                                return(
                                    <div class="single-comment">
                                        <div class="comment-avatar">
                                            {/* <img src="image/icon/author-logo.png" alt="" /> */}
                                            <PersonOutlineIcon />
                                        </div>
                                        <div class="comment-text">
                                            <h5 class="author"> <a href="#"> {comment.name} </a></h5>
                                            <span class="time">{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</span>
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
                    <form onKeyPress={(e) => e.key === 'Enter' && onSubmitHandler} onSubmit={onSubmitHandler} class="blog-form">
                        <div class="row">
                        <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="name">Your Name *</label>
                                    <input onKeyPress={(e) => e.key === 'Enter' && onSubmitHandler} onChange={(e)=>validateName(e.target.value)} value={name} type="text" id="name" class="form-control" />
                                    {
                                    nameErr && 
                                        <p style={{color: 'red'}}>{nameErr}</p>
                                    }
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="message">Comment</label>
                                    <textarea onKeyPress={(e) => e.key === 'Enter' && onSubmitHandler} onChange={(e)=>validateComment(e.target.value)} value={iComment} name="message" id="message" cols="30" rows="4"
                                        class="form-control"></textarea>
                                    {
                                    iCommentErr && 
                                        <p style={{color: 'red'}}>{iCommentErr}</p>
                                    }
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="submit-btn">
                                <Button type="submit" variant="contained" className="btn btn-black" color="primary">
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
