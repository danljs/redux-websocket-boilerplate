package auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import auth.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
