import getFormData from 'pages/Registration/lib/utils';
import { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAddPostMutation, useUpdatePostMutation, useUploadImageMutation } from 'shared/api';
import { IPost } from 'shared/api/lib/types';

const useNewPost = () => {
  const post = useLocation().state as IPost;
  const navigate = useNavigate();
  const [addPost] = useAddPostMutation();
  const [editPost] = useUpdatePostMutation();
  const [uploadImg] = useUploadImageMutation();
  const [active, setActive] = useState(true);
  const [title, setTitle] = useState(post?.title || '');
  const [tags, setTags] = useState(post?.tags.join(',') || '');
  const [text, setText] = useState(post?.text || '');
  const imgRef = useRef<HTMLInputElement>(null);
  let imageUrl = post?.imageUrl || '';

  const onChange = (value?: string) => setText(value || '');

  const onSubmit = async () => {
    setActive(false);
    const formData = getFormData(imgRef);
    const correctTags = tags.replace(/\s+/g, ',');
    if (typeof formData !== 'string') {
      imageUrl = (await uploadImg(formData).unwrap()).secure_url;
    }
    const postData = { title, text, tags: correctTags, imageUrl };
    const { _id: id } = post
      ? await editPost({ ...postData, _id: post._id }).unwrap()
      : await addPost(postData).unwrap();
    navigate(`/post/${id}`);
  };

  return {
    active,
    onSubmit,
    onChange,
    setTags,
    setTitle,
    tags,
    title,
    imgRef,
    text,
  };
};

export default useNewPost;
