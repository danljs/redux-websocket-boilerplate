package auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import auth.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
}
