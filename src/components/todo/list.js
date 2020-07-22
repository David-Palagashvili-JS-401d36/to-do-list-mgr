import React from 'react';
// https://react-bootstrap.github.io/components/list-group/

import ListGroup from 'react-bootstrap/ListGroup';

const TodoList = (props) => {

    const handleStatus = (item) => {
        if (item.complete === true) {
            return 'success';
        }
        return 'failure';
    };

    return( // variant flush 
        <ListGroup as="ul" variant="flush">
            {props.list.map(item => (
                <ListGroup.Item as="li" action variant={handleStatus(item)}
                    className={`complete-${item.complete.toString()}`}
                    key={item._id}
                >
                    <span onClick={() => this.props.handleComplete(item._id)}>
                        {item.text}
                    </span>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TodoList;
