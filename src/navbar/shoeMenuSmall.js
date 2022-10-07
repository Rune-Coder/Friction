import React, { useState } from 'react';

import classes from './shoeMenuSmall.module.css';

function ShoeMenuSmall(props){

    const [dropMenuMen, setDropMenuMen] = useState(false);
    const [dropMenuWomen, setDropMenuWomen] = useState(false);
    const [dropMenuKids, setDropMenuKids] = useState(false);

    const [dropMenuMenTypes1, setDropMenuMenTypes1] = useState(false);
    const [dropMenuMenTypes2, setDropMenuMenTypes2] = useState(false);

    const [dropMenuWomenTypes1, setDropMenuWomenTypes1] = useState(false);
    const [dropMenuWomenTypes2, setDropMenuWomenTypes2] = useState(false);

    const [dropMenuKidsTypes1, setDropMenuKidsTypes1] = useState(false);
    const [dropMenuKidsTypes2, setDropMenuKidsTypes2] = useState(false);

    function dropMen(event){
        if(dropMenuMen)
            setDropMenuMen(false);
        else
            setDropMenuMen(true);
    }

    function dropWomen(event){
        if(dropMenuWomen)
            setDropMenuWomen(false);
        else
            setDropMenuWomen(true);
    }

    function dropKids(event){
        if(dropMenuKids)
            setDropMenuKids(false);
        else
            setDropMenuKids(true);
    }

    function dropMenTypes1(event){
        if(dropMenuMenTypes1)
            setDropMenuMenTypes1(false);
        else
            setDropMenuMenTypes1(true);
    }

    function dropMenTypes2(event){
        if(dropMenuMenTypes2)
            setDropMenuMenTypes2(false);
        else
            setDropMenuMenTypes2(true);
    }

    function dropWomenTypes1(event){
        if(dropMenuWomenTypes1)
            setDropMenuWomenTypes1(false);
        else
            setDropMenuWomenTypes1(true);
    }

    function dropWomenTypes2(event){
        if(dropMenuWomenTypes2)
            setDropMenuWomenTypes2(false);
        else
            setDropMenuWomenTypes2(true);
    }

    function dropKidsTypes1(event){
        if(dropMenuKidsTypes1)
            setDropMenuKidsTypes1(false);
        else
            setDropMenuKidsTypes1(true);
    }

    function dropKidsTypes2(event){
        if(dropMenuKidsTypes2)
            setDropMenuKidsTypes2(false);
        else
            setDropMenuKidsTypes2(true);
    }

    return(
        <>
            <li className={classes.smallMenu}>

                <div className={classes.headItem} onClick={dropMen}>
                    <div>Men</div>
                    <div>></div>
                </div>

                {dropMenuMen && 
                <div className={classes.subHead}>
                    <ul className={classes.subList}>
                        <li className={classes.subHeadItem}>

                            <div className={classes.headItem} onClick={dropMenTypes1}>
                                <div>Men</div>
                                <div>></div>
                            </div>

                            {dropMenuMenTypes1 && <ul className={classes.subList}>
                                <li>Boots</li>
                                <li>Boots</li>
                            </ul>}

                        </li>
                        <li className={classes.subHeadItem}>
                            
                            <div className={classes.headItem} onClick={dropMenTypes2}>
                                <div>Men</div>
                                <div>></div>
                            </div>

                            {dropMenuMenTypes2 && <ul className={classes.subList}>
                                <li>Boots</li>
                                <li>Boots</li>
                            </ul>}

                        </li>
                    </ul>
                </div>}

            </li>

            <li className={classes.smallMenu}>

                <div className={classes.headItem} onClick={dropWomen}>
                    <div>Women</div>
                    <div>></div>
                </div>

                {dropMenuWomen && 
                <div className={classes.subHead}>
                    <ul className={classes.subList}>
                        <li className={classes.subHeadItem}>
                            
                            <div className={classes.headItem} onClick={dropWomenTypes1}>
                                <div>Men</div>
                                <div>></div>
                            </div>

                            {dropMenuWomenTypes1 && <ul className={classes.subList}>
                                <li>Boots</li>
                                <li>Boots</li>
                            </ul>}

                        </li>
                        <li className={classes.subHeadItem}>
                            
                            <div className={classes.headItem} onClick={dropWomenTypes2}>
                                <div>Men</div>
                                <div>></div>
                            </div>

                            {dropMenuWomenTypes2 && <ul className={classes.subList}>
                                <li>Boots</li>
                                <li>Boots</li>
                            </ul>}

                        </li>
                    </ul>
                </div>}

            </li>

            <li className={classes.smallMenu}>

                <div className={classes.headItem} onClick={dropKids}>
                    <div>Kids</div>
                    <div>></div>
                </div>

                {dropMenuKids && 
                <div className={classes.subHead}>
                    <ul className={classes.subList}>
                        <li className={classes.subHeadItem}>
                           
                            <div className={classes.headItem} onClick={dropKidsTypes1}>
                                <div>Men</div>
                                <div>></div>
                            </div>

                            {dropMenuKidsTypes1 && <ul className={classes.subList}>
                                <li>Boots</li>
                                <li>Boots</li>
                            </ul>}

                        </li>
                        <li className={classes.subHeadItem}>
                            
                            <div className={classes.headItem} onClick={dropKidsTypes2}>
                                <div>Men</div>
                                <div>></div>
                            </div>

                            {dropMenuKidsTypes2 && <ul className={classes.subList}>
                                <li>Boots</li>
                                <li>Boots</li>
                            </ul>}

                        </li>
                    </ul>
                </div>}

            </li>
        </>
    );
}

export default ShoeMenuSmall;