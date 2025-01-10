export const load = id => ({
    model: {
        id: id || '',
        title: '',
        body: ''
    }
});

export const loaded = ($scope, $route) => {
    const { id } = $route.params;
    if (id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`).then(res => res.json()).then(post => {
            $scope.model = post;
        });
    }
};

export const onSubmit = model => {
    if (model.id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${ model.id }`, {
            method: 'PUT',
            body: JSON.stringify(model)
        })
        .then(res => res.json())
        .then(() => {
            history.pushState(null, '', '/');
        });
    } else {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(model)
        })
        .then(res => res.json())
        .then(() => {
            history.pushState(null, '', '/');
        });
    }
};
