import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'


function ProductEditScreen() {

    const navigate = useNavigate()
    const productId = useParams()

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [pages, setPages] = useState(0)
    const [author, setAuthor] = useState('')
    const [image, setImage] = useState('')
    const [publisher, setPublisher] = useState('')
    const [publicationDate, setPublicationDate] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate

    useEffect(() => {
       

        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            navigate('/admin/productlist')
        } else {
            if (!product.name || product._id !== Number(productId.id)) {
                dispatch(listProductDetails(productId.id))
            } else {
                setName(product.name)
                setPrice(product.price)
                setPages(product.pages)
                setAuthor(product.author)
                setPublisher(product.publisher)
                setPublicationDate(product.publicationDate)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)

            }
        }



    }, [dispatch, product, productId, navigate, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProduct({
            _id: productId.id,
            name,
            author,
            price,
            pages,
            publisher,
            publicationDate,
            category,
            countInStock,
            description
        }))
    }

    // const uploadFileHandler = async (e) => {
    //     const file = e.target.files[0]
    //     const formData = new FormData()

    //     formData.append('image', file)
    //     formData.append('product_id', productId)

    //     setUploading(true)

    //     try {
    //         const config = {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         }

    //         const { data } = await axios.post('/api/products/upload/', formData, config)


    //         setImage(data)
    //         setUploading(false)

    //     } catch (error) {
    //         setUploading(false)
    //     }
    // }

    return (
        <div>
            <Link to='/admin/productlist'>
                Go Back
            </Link>

            <FormContainer>
                <h1>Editar produto</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='name'>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control

                                    type='name'
                                    placeholder=''
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='author'>
                                <Form.Label>Autor</Form.Label>
                                <Form.Control

                                    type='author'
                                    placeholder=''
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='price'>
                                <Form.Label>Preço</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            {/* <Form.Group controlId='image'>
                                <Form.Label>Image</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder=''
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>

                                <Form.File
                                    id='image-file'
                                    label='Choose File'
                                    custom
                                    onChange={uploadFileHandler}
                                >

                                </Form.File>
                                {uploading && <Loader />}

                            </Form.Group> */}


                            <Form.Group controlId='publisher'>
                                <Form.Label>Editora</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder=''
                                    value={publisher}
                                    onChange={(e) => setPublisher(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='publicationDate'>
                                <Form.Label>Data de publicação</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder=''
                                    value={publicationDate}
                                    onChange={(e) => setPublicationDate(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='pages'>
                                <Form.Label>Páginas</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder=''
                                    value={pages}
                                    onChange={(e) => setPages(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='countinstock'>
                                <Form.Label>Quantidade em estoque</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder=''
                                    value={countInStock}
                                    onChange={(e) => setCountInStock(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='category'>
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder=''
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='description'>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder=''
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Button type='submit' variant='primary'>
                                Update
                            </Button>

                        </Form>
                    )}

            </FormContainer >
        </div>

    )
}

export default ProductEditScreen