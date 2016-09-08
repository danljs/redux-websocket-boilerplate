package auth.service;

import auth.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
