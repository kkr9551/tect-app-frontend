import React, { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import "./Quiz.css";
import Question from "./Question.js";
//import Slider from "../slider/Slider.js";
import { Link } from 'react-router-dom';

const Quiz = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    /*const slides = [
        {"src": "img/slide1.jpg"},
        {"src": "img/slide2.jpg"},
        {"src": "img/slide3.jpg"},
        {"src": "img/slide4.jpg"},
    ];*/
    console.log('quizState', quizState);
    return (
        <div className='quizGame'>
            {quizState.showResults && (
                <div className='results'>
                    {quizState.correctAnswerCount <= 3 ? (
                        <div className='result-container'>
                            <div className='result-info'>
                                You've got {quizState.correctAnswerCount} of {""} {quizState.questions.length} right.
                            </div>
                            <div className='congratulation'>We suspect your loyalty to the Party. Glavlit decided to kick you out.</div>
                            <div className='next-btn' onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                            <p className='summary'>How's your feeling after playing the role of censor in that era? It must have been a tough job. Not only did you have to embrace the ideology, but be also familiar with the policy and standards of selecting the original and translations. Now, let's see how Glavlit sifted 'white' from 'red'.</p>
                        </div>
                    ) : quizState.correctAnswerCount >= 4 || quizState.correctAnswerCount <= 6 ? (
                        <div className='result-container'>
                            <div className='result-info'>
                                You've got {quizState.correctAnswerCount} of {""} {quizState.questions.length} right.
                            </div>
                            <div className='congratulation'>You have to receive more training until you get sharp eyes to purge corrupt thoughts</div>
                            <div className='next-btn' onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                            <p className='summary'>How's your feeling after playing the role of censor in that era? It must have been a tough job. Not only did you have to embrace the ideology, but be also familiar with the policy and standards of selecting the original and translations. Now, let's see how Glavlit sifted 'white' from 'red'.</p>
                        </div>
                    ) : (
                        <div className='result-container'>
                            <div className='result-info'>
                                Well done! You've got {quizState.correctAnswerCount} of {""} {quizState.questions.length} right.
                            </div>
                            <div className='congratulation'>Glavlit appreciate your capacity! You're our native land's pride!</div>
                            <div className='next-btn' onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                            <p className='summary'>How's your feeling after playing the role of censor in that era? It must have been a tough job. Not only did you have to embrace the ideology, but be also familiar with the policy and standards of selecting the original and translations. Now, let's see how Glavlit sifted 'white' from 'red'.</p>
                        </div>
                    )}
                    
                    <section className='introToCM'>
                        <div className='CMblock-danger'>
                            <h3 className='CMblock-title'>Danger</h3>
                            <p className='CMblock-text'>
                                Dangerous books were literature written by unacceptable authors. Unacceptable authors can be categorised into three groups: enemies who emigrated to western countries &#40;e.g. Vladimir Nabokov, Joseph Brodsky&#41;; authors who held anti-communism attitudes or cast doubt in the communism &#40;e.g. George Orwell, Andre Gidé, Günther Grass&#41;; authors whose works involved supermodernism, mysticism, sexual text, or anything contradicts the monolithic Soviet culture and ideology &#40;e.g. Franz Kafka, Virginia Woolf, D.H.Lawrence&#41;.
                            
                                This list of unaccepted authors typified pre-publication censorship. The USSR imposed such a restriction before the publication.
                            </p>
                        </div>
                        <div className='CMblock-safe'>
                            <h3 className='CMblock-title'>Safe</h3>
                            <p className='CMblock-text'>
                                Safe text denoted the recommended classical or communist literature. For example, Pushikin's works and "Das Capital". This kind of literature contributed to shaping citizens' ideology and self-identification. However, due to the transformation of power structures in the communist party, Glavlit also imposed restrictions on safe books during the former leader's governance. For instance, during Khrushchev's Thaw, censorship policies turned to puritanism, focusing on sensitive content such as sexual description more than ideological conflicts. The power struggle also led to the large-scale removal of Stalin's works from libraries and book trade markets because Stalin's authority had been completely denied in the <a className='linktoArticle' rel='noreferrer' targe="_blank" href="https://en.wikipedia.org/wiki/On_the_Cult_of_Personality_and_Its_Consequences">"Secret Speech"</a> reported by Khrushchev.  
                            </p>
                        </div>
                        <div className='CMblock-reformable'>
                            <h3 className='CMblock-title'>Reformable</h3>
                            <p className='CMblock-text'>
                                As a translator and an editor during the Soviet occupation of Estonia, you still needed to check and edit the translated originals which did not belong to the list of banned authors. Books not on the list never meant being exempt from censorship; they were reformable rather than safe. All the characters and content needed, for example, editing if they failed to represent the cause of the communist party and impeccable Russians. For instance, the Pravda correspondent Karkov's "bad teeth" and mistress had to be omitted from the Estonian translation of Hemingways's "For Whom the Bell Tolls". "Uncle Tom's Cabin" also suffered cuts of religion-related content despite its value of criticising slavery. To overcome the post-publication barrier, translators had to use creative strategies. We recommend this <a className='linktoArticle' rel='noreferrer' targe="_blank" href="https://www.researchgate.net/publication/299571666_Smuggling_the_other_Rita_Rait-Kovaleva's_translation_of_J_D_Salinger's_The_Catcher_in_the_Rye">article</a> about the Russian translation of "The Catcher in the Rye". But how was the Estonian translation of this book ? 
                            </p>
                        </div>
                        <div className='CMblock-fugitive'>
                            <h3 className='CMblock-title'>Need more attention</h3>
                            <p className='CMblock-text'>
                                'Need more attention' means that some books that might have been dangerous or reformable survived the strict scrutinisation. There were two situations. Firstly, some Books circulated underground. For instance, in Lithuania, though not officially introduced, the book “ On the Road” was quite popular among the young. Secondly, some dangerous books should have been strictely chekced but for different reasons they excaped. For example, because the institution of art and literature did not know much about <a className='linktoArticle' target="_blank" rel='noreferrer' href='https://et.wikipedia.org/wiki/Saul_Bellow'>Saul Bellow</a> &#40;1915-2005, an American writer born in a family that emigrated from St. Peterberg&#41; and his works, the Estonian translation of his book “Herzog” came out in 1972. As for the story behind "Herzog", we recommend reading this <a className='linktoArticle' href="https://www.tandfonline.com/doi/abs/10.1080/13556509.2014.899096" target="_blank" rel='noreferrer'>article</a>.
                            </p>
                        </div>
                            
                        <div className='CMblock-appeal'>
                            <p className='CMblock-text'>
                                All above is an introduction to various censorship manipulations. You may notice that some cases were in other countries. Whether these case also exist in Estonian history reamin questions. We need your help. No matter who you are, an avid or a casual reader,  and no matter how much you can find in reading, your every effort contributes to rebuilding the history of translation and censorship.
                                <br />
                                Why not have a go? Join <Link className='appealLink' to='/detection'>detection</Link> as a detective.
                                <br />
                                You can also select to help provide information about Estonian translations censored during the occupation of the USSR.
                                <br />
                                If you have information, fill in this <a className='formLinkBookList' href='https://docs.google.com/forms/d/e/1FAIpQLSf-BSvy5vbe0TzRN4bl430uPxmvW6QK1GpKs4URxvJxaV3Gaw/viewform?usp=sf_link' target='_blank' rel='noreferrer'>form</a>
                            </p>
                            
                        </div>
                    </section>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className='gameRules'>
                        <p className='ruleText'>
                            Before taking up the position of Editor in Glavlit &#40;General Directorate for the Protection of State Secrets in the Press&#41;,
                            <br />
                            You need to pass a quiz. Your good grades is the sign of your loyalty to the Party.
                            <br /> 
                            You have four tags to mark each of ten books below: Danger, Safe, Reformable, and Need more attention
                            <br />
                            Tag 'Danger': unacceptable authors and their works;
                            <br />
                            Tag 'Safe': Russian classical literature and communist writing;
                            <br />
                            Tag 'Reformable': books that need rewriting or cutting;
                            <br />
                            Tag 'Need more attention': books going unnoticed;
                        </p>
                    </div>
                    <div className='book-score'>
                        Book {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                    </div>
                    <Question />
                    <div className='next-btn' onClick={() => dispatch({type: 'NEXT_QUESTION'})}>Next Question</div>
                </div>
            )}
        </div>
    );
};

export default Quiz;