# Branch Protection and Workflow

## Branch Strategy

### Main Branches

- **`main`** - Production-ready code
- **`develop`** - Development integration branch

### Feature Branches

- **`feature/feature-name`** - New features
- **`bugfix/bug-description`** - Bug fixes
- **`hotfix/urgent-fix`** - Critical production fixes

## Branch Protection Rules

### Main Branch Protection

- Require pull request reviews before merging
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Restrict pushes that create files larger than 100MB
- Require linear history

### Develop Branch Protection

- Require pull request reviews before merging
- Require status checks to pass before merging
- Allow force pushes (for development flexibility)

## Workflow

### Feature Development

1. Create feature branch from `develop`
2. Develop and test your feature
3. Create pull request to `develop`
4. Get code review and approval
5. Merge to `develop`

### Release Process

1. Create release branch from `develop`
2. Final testing and bug fixes
3. Create pull request to `main`
4. Get approval and merge
5. Tag release version

### Hotfix Process

1. Create hotfix branch from `main`
2. Fix the critical issue
3. Create pull request to both `main` and `develop`
4. Merge to both branches
5. Tag hotfix version

## Commit Message Convention

```
type(scope): description

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```
feat(toolkit): add digital safety assessment tool
fix(contact): resolve form submission issue
docs(readme): update installation instructions
```
