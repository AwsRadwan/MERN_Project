import React from 'react'
import Paper from '@material-ui/core/Paper';

const ThisBook = ({book}) => {
    return (
        
            <div class="col-md-9 col-sm-9 col-xs-12" id="thisBookk">
			<section class="breadcrumb-section">
            <div class="container">
                <div class="breadcrumb-contents">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
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
                        <img src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1" alt="" />
                    </div>
                    <div class="blog-content mt--30">
                        <header>
                            <h3 class="blog-title">Book title</h3>
                            <div class="post-meta">
                                <span class="post-author">
                                    <i class="fas fa-user"></i>
                                    <span class="text-gray">Posted by : </span>
                                    book Author
                                </span>
                                <span class="post-separator">|</span>
                                <span class="post-date">
                                    <i class="far fa-calendar-alt"></i>
                                    <span class="text-gray">On : </span>
                                    March 10, 2015
                                </span>
                            </div>
                        </header>
                        <article>
                            <blockquote>
                            <h3>Book Descroption</h3>
                                <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In
                                    venenatis elit ac
                                    ultrices convallis.
                                    Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet
                                    ligula ut
                                    eleifend. Proin dictum
                                    tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                            </blockquote>
                        </article>
                    </div>
                </div>
                <div class="comment-block-wrapper mb--50">
                    <h3>3 Comments</h3>
                    <div class="single-comment">
                        <div class="comment-avatar">
                            <img src="image/icon/author-logo.png" alt="" />
                        </div>
                        <div class="comment-text">
                            <h5 class="author"> <a href="#"> Author</a></h5>
                            <span class="time">October 8, 2014 at 12:38 pm</span>
                            <p>Ame No Parade</p>
                        </div>
                    </div>
                    <div class="single-comment">
                        <div class="comment-avatar">
                            <img src="image/icon/author-logo.png" alt="" />
                        </div>
                        <div class="comment-text">
                            <h5 class="author"> <a href="#">Jack</a></h5>
                            <span class="time">January 19, 2018 at 3:00 am</span>
                            <p>just a nice post</p>
                        </div>
                    </div>
                    <div class="single-comment">
                        <div class="comment-avatar">
                            <img src="image/icon/author-logo.png" alt="" />
                        </div>
                        <div class="comment-text">
                            <h5 class="author"> <a href="#">Dexter</a></h5>
                            <span class="time">august 31, 2021 at 3:30 am</span>
                            <p>Awesome Post </p>
                        </div>
                    </div>
                </div>
                <div class="replay-form-wrapper">
                    <h3 class="mt-0">LEAVE A COMMENT</h3>
                    <form action="./" class="blog-form">
                        <div class="row">
                        <div class="col-lg-4">
                                <div class="form-group">
                                    <label for="name">Name *</label>
                                    <input type="text" id="name" class="form-control" />
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="message">Comment</label>
                                    <textarea name="message" id="message" cols="30" rows="4"
                                        class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="submit-btn">
                                    <a href="#" class="btn btn-black">Post Comment</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
		</div>
    )
}

export default ThisBook
