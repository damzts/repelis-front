import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, HStack, Image, Input, InputGroup, InputLeftAddon, Select, Stack, Text, Textarea } from '@chakra-ui/react';


const MovieForm = ({ onSubmit, defaultEditValues }) => {

    const defaultValues = {
        title: '',
        description: '',
        genre: '',
        year: 0,
        length: 0,
        imageUrl: '',
        videoUrl: '',
    }


    const movieFormSchema = yup.object().shape({
        title: yup.string().required('You need to add a title'),
        description: yup.string(),
        genre: yup.string().required("A genre must be selected"),
        year: yup.number().required().positive("You must be time traveler").typeError('You need to enter a release year, must be number.'),
        length: yup.number().positive("Negative time doesn't exist").required().typeError('You need to enter a movie duration, must be number.'),
        imageUrl: yup.string(),
        videoUrl: yup.string(),
    })

    const { control, watch, handleSubmit, reset } = useForm({
        defaultValues: defaultEditValues || defaultValues,
        resolver: yupResolver(movieFormSchema),
        mode: 'all',
    })

    const imageUrlValue = watch('imageUrl')
    const videoUrlValue = watch('videoUrl')

    return (
        <Stack
            as='form'
            id='product-form'
            spacing='24px'
            onReset={() => reset(defaultValues)}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Box>
                <Controller
                    control={control}
                    name='title'
                    render={({ field, fieldState }) => (
                        <FormControl
                            isRequired={fieldState.error}
                            isInvalid={fieldState.error}
                        >
                            <FormLabel htmlFor='title' >Title</FormLabel>
                            <Input
                                {...field}
                                id='title'
                                variant='filled'
                                bgColor='blackAlpha.400'
                                placeholder='e.g. The Godfather 2'
                            />
                            {!fieldState.error ? (
                                <FormHelperText>
                                    Enter the name of the movie itself.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>
                                    {fieldState.error?.message}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    )}
                />
            </Box>
            <Box>
                <Controller
                    control={control}
                    name='description'
                    render={({ field, fieldState }) => (
                        <FormControl>
                            <FormLabel htmlFor='desc'>Description</FormLabel>
                            <Textarea
                                {...field}
                                id='desc'
                                variant='filled'
                                bgColor='blackAlpha.400'
                                placeholder='Once upon a time ...'
                            />
                            <FormHelperText>
                                Briefly describe the plot of the movie
                            </FormHelperText>
                        </FormControl>
                    )}
                />

            </Box>
            <Box>
                <Controller
                    control={control}
                    name='genre'
                    render={({ field, fieldState }) => (
                        <FormControl
                            isRequired={fieldState.error}
                            isInvalid={fieldState.error}
                        >
                            <FormLabel htmlFor='genre'>Genre</FormLabel>
                            <Select
                                {...field}
                                id='genre'
                                variant='filled'
                                bgColor='blackAlpha.400'
                                placeholder='Select'
                                size='sm'
                            >
                                <option value='action'>Action</option>
                                <option value='comedy'>Comedy</option>
                                <option value='horror'>Horror</option>
                                <option value='scifi'>Sci-Fi</option>
                                <option value='romance'>Romance</option>
                                <option value='fantasy'>Fantasy</option>
                            </Select>
                            {!fieldState.error ? (
                                <FormHelperText>
                                    Select only one main genre for the movie.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>
                                    {fieldState.error?.message}
                                </FormErrorMessage>
                            )}
                        </FormControl>
                    )}
                />
            </Box>
            <Box>
                <Controller
                    control={control}
                    name='year'
                    render={({ field, fieldState }) => (
                        <FormControl
                            isRequired={fieldState.error}
                            isInvalid={fieldState.error}
                        >
                            <FormLabel htmlFor='year'>Year</FormLabel>
                            <Input
                                {...field}
                                id='year'
                                variant='filled'
                                bgColor='blackAlpha.400'
                            />
                            {!fieldState.error ? (
                                <FormHelperText>
                                    Year the movie was released.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>
                                    {fieldState.error?.message}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                    )}
                />
            </Box>
            <Box>
                <Controller
                    control={control}
                    name='length'
                    render={({ field, fieldState }) => (
                        <FormControl
                            isRequired={fieldState.error}
                            isInvalid={fieldState.error}
                        >
                            <FormLabel htmlFor='length'>Duration</FormLabel>
                            <Input
                                {...field}
                                id='length'
                                variant='filled'
                                bgColor='blackAlpha.400'
                            />
                            {!fieldState.error ? (
                                <FormHelperText>
                                    Movie duration in minutes.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>
                                    {fieldState.error?.message}
                                </FormErrorMessage>
                            )}
                        </FormControl>

                    )}
                />

            </Box>
            <Box>
                <Controller
                    control={control}
                    name='imageUrl'
                    render={({ field, fieldState }) => (
                        <FormControl>
                            <FormLabel htmlFor='imageUrl'>Image Link</FormLabel>
                            <Input
                                {...field}
                                id='imageUrl'
                                type='url'
                                placeholder='Please enter domain'
                                variant='filled'
                                bgColor='blackAlpha.400'
                            />
                            <FormHelperText>
                                Entering a valid url will perfectly load an image.
                            </FormHelperText>
                        </FormControl>
                    )}
                />
            </Box>
            {imageUrlValue &&
                <HStack
                    mt="5"
                    justifyContent='center'
                >
                    <Image
                        loading='eager'
                        borderRadius="30px"
                        w={[50, 120]}
                        h={[50, 120]}
                        src={imageUrlValue}
                    />
                </HStack>
            }
            <Box>
                <Controller
                    control={control}
                    name='videoUrl'
                    render={({ field, fieldState }) => (
                        <>
                            <FormControl>
                                <FormLabel htmlFor='videoUrl'>Video Link</FormLabel>
                                <InputGroup
                                    flexWrap={['wrap', 'wrap']}
                                >
                                    <Input
                                        {...field}
                                        id='videoUrl'
                                        type='text'
                                        placeholder='https://www.youtube.com/embed/'
                                        variant='filled'
                                        bgColor='blackAlpha.400'
                                    />
                                </InputGroup>
                                <FormHelperText>
                                    Valid url will load and play a preview. Link must be in embed format.
                                </FormHelperText>
                            </FormControl>
                            {videoUrlValue &&
                                <HStack
                                    mt="5"
                                    justifyContent='center'
                                >
                                    <iframe
                                        width="460"
                                        height="315"
                                        src={field.value}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    >
                                    </iframe>
                                </HStack>}
                        </>
                    )}
                />

            </Box>

        </Stack>
    )
}

export default MovieForm