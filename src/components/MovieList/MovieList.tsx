import React, { useEffect, useState } from "react";
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Link } from "../Link";
import {Button} from '../Btn';
import './MovieList.scss';

export const MovieList: React.FC = () => {
  const { loading, data, error } = useTypedSelector(state => state.movies);
  const { fetchMovies } = useActions()
  const [indexPage, setIndexPage] = useState(0);

 
  

  useEffect(() => {
    fetchMovies()
  }, [])

  console.log(data);

  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  function handleClick() { }

  const count = data?.length;
  const cnt = 3;
  if(!count) return <h1>Что-то пошло не так</h1>
  const cnt_page = Math.ceil(count / cnt);
  let page:any[] = [];
  const paginator = [];
  let indexP = 0;
  let itemArr:any[] = [];

  const pageSwitch = (index: React.SetStateAction<number>) => {
    setIndexPage(index);
  };
  
  if (cnt_page) {
    for (let i = 0; i < cnt_page; i++) {
      paginator.push(
        <Button
          indexPage={indexPage}
          index={i}
          pageSwitch={pageSwitch}
          handleClick={handleClick}
        />
      );
    }
  };

  data.forEach(({id, url, medium_cover_image, title}, i) => {
    itemArr.push(
        <div key={id} className='card'>
          <div>
            <img src={medium_cover_image} alt="title" />
          </div>
          <div className='card_footer'>
            {title}
            <Link className={'card_link'} href={url} description={'Смотреть онлайн'} />
          </div>

        </div>
    );
    if (itemArr.length >= 4 || count - 1 === i || data.length - 1 === i) {
      page.push(
        <div
          className={
            indexP === indexPage
              ? "list-group todo-list active"
              : "list-group todo-list"
          }
        >
          {itemArr}
        </div>
      );
      indexP++;
      itemArr = [];
    }
  });

  return (
    <div className='container'>
      <div>{page[indexPage]}</div> 
      <div>{paginator}</div> 
    </div>
  )
}